import { ref } from "vue";
import { b as useToastAlert } from "./useToastAlert-BBJ771Vo.js";
function useClipboard() {
  const copied = ref(false);
  const { toastSuccess } = useToastAlert();
  const fallbackCopyTextToClipboard = (text) => {
    const textArea = (void 0).createElement("textarea");
    textArea.value = text;
    textArea.style.cssText = "position: fixed; top: 0; left: 0; opacity: 0;";
    (void 0).body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = (void 0).execCommand("copy");
      (void 0).body.removeChild(textArea);
      return successful;
    } catch (err) {
      (void 0).body.removeChild(textArea);
      return false;
    }
  };
  const copyNow = async (text) => {
    try {
      if (false) ;
    } catch (err) {
      copied.value = false;
    }
  };
  return {
    copied,
    copyNow
  };
}
export {
  useClipboard as u
};
//# sourceMappingURL=useClipboard-scHTkX45.js.map
