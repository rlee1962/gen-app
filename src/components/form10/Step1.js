import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import styled from "styled-components";
import "./../styles/tailwind.css";
import updateAction from "./../common/updateAction";

const Step1 = () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: state.smartWaypointState,
  });

  const history = useHistory();
<<<<<<< HEAD

=======
>>>>>>> bd8959947378e8169b325daa5256a41f065b04a8
  const onSubmit = (data) => {
    action(data);
    history.push("/step2");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Step-1</h3>
        <label>
          Description:
          <input {...register("description")} />
        </label>

        <label>
          Sub Description:
          <input {...register("subDescription")} />
        </label>

        <input type="submit" value="&#x226A; Submit &#x226B;" />

        <input
          type="button"
          className="resetButton"
          value="Reset Selection"
          onClick={() => {
            reset(state);
            window.STATE_MACHINE_RESET();
            window.location.reload();
          }}
        />
      </form>
    </FormContainer>
  );
};

export default Step1;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;
<<<<<<< HEAD
=======

export default Step1;
>>>>>>> bd8959947378e8169b325daa5256a41f065b04a8
