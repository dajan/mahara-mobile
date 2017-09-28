/*jshint esnext: true */

export function arrayRemoveIf(callback) {
    var i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        }
    }
}

export const setTextareaHeight = (textarea) => {
  let saveButtonHeight = 100, //todo: approximate height most of the time
      textareaLayout = textarea.getBoundingClientRect(),
      newTextAreaHeight = window.innerHeight - textareaLayout.top - saveButtonHeight,
      minimumHeight = 50; // 50 (pixels) is about 2 lines of text on most screens. Feel free to tweak this.

  newTextAreaHeight = newTextAreaHeight < minimumHeight ? minimumHeight : newTextAreaHeight; //clamping the value to a minimum
  textarea.style.height = newTextAreaHeight + "px";
};
