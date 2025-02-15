// composables/useCopy.ts
import { ref } from "vue";
import { useToastAlert } from "~/composables/useToastAlert";

export function useCopy() {
  const copied = ref(false);
  const { toastSuccess, toastError } = useToastAlert();

  const fallbackCopyTextToClipboard = (text: string): boolean => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.cssText = "position: fixed; top: 0; left: 0; opacity: 0;";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  };

  const copyNow = async (text: string) => {
    try {
      if (process.client) {
        // Check if we're on client-side
        if (!navigator.clipboard) {
          const success = fallbackCopyTextToClipboard(text);
          if (!success) throw new Error("Fallback copy failed");
        } else {
          await navigator.clipboard.writeText(text);
        }

        copied.value = true;
        toastSuccess(`Copied: ${text}`);

        // Reset copied state after 2 seconds
        setTimeout(() => {
          copied.value = false;
        }, 2000);
      }
    } catch (err) {
      copied.value = false;
      toastError("Failed to copy text");
    }
  };

  return {
    copied,
    copyNow,
  };
}
