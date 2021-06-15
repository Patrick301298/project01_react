import { KEY_RETURN } from "keycode-js";
import { compose, withState, withHandlers } from "recompose";

export default compose(
  withState("value", "setValue", (props) => {
    console.log("got props", props);
  }),
  withHandlers({
    handleKeyup:
      ({ addNew, setValue }) =>
      (e) => {
        const text = e.target.value.trim();
        if (e.keyCode === KEY_RETURN && text) {
          addNew(text);
          setValue("");
        }
      },
    handleChange:
      ({ setValue }) =>
      (e) => {
        setValue(e.target.value);
      },
  })
);