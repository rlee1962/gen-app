import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import FieldArray from "./fieldArray";
import { useStateMachine } from "little-state-machine";
<<<<<<< HEAD

import "./../styles/tailwind.css";

import updateAction from "./../common/updateAction";

const Step2 = () => {
=======
import "./../styles/tailwind.css";
import updateAction from "./../common/updateAction";

const Step2 = (props) => {
>>>>>>> bd8959947378e8169b325daa5256a41f065b04a8
  const history = useHistory();

  useEffect(() => {
    history.push("/step2");
<<<<<<< HEAD
  }, [history]);
=======
  });
>>>>>>> bd8959947378e8169b325daa5256a41f065b04a8

  const { state, action } = useStateMachine(updateAction);
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues: state.smartWaypointState,
  });

  const onSubmit = (data) => {
    action(data);
    history.push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Step-2</h3>

      <FieldArray
        {...{
          control,
          register,
          state,
          getValues,
          setValue,
          errors,
        }}
      />

      <button
        className="buttonReset"
        type="button"
        onClick={() => reset(state)}
      >
        Reset
      </button>

      <input type="submit" value="&#x226A; Submit &#x226B;" />
    </form>
  );
};

export default Step2;
