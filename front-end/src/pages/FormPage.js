import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { NameInput, AgeInput, EmailInput, DescriptionInput, AdressInput,
  NumberInput, CityInput, StateInput, CountryInput  } from '../components/inputs';
import { ButtonNavigate, ButtonMenu } from '../components/button';
import { requestCreate } from '../utils/api';
import ResetInputs from '../utils/ResetInputs';
import UserImage from '../components/image/UserImage';
import { div, div2, aside, form, h1, inputSubmit, img2 } from '../styles/formPageStyle';

function FormPage() {
  const { register, handleSubmit, reset } = useForm();
  const history = useNavigate();

  const onSubmit = async (data) => {
    const response = await requestCreate(data);
    reset(ResetInputs);
    alert(response.message);
    history('/users');
  };

  return (
    <div className={ div }>
      <ButtonMenu />
      <div className={ div2 }>
        <aside className={ aside }>
          <UserImage className={ img2 } />
          <h1 className={ h1 }>REGISTER USER</h1>
        </aside>
        <main>
          <form
            className={ form }
            onSubmit={handleSubmit(onSubmit)}
          >
            <NameInput register={register} />
            <AgeInput register={register} />
            <EmailInput register={register} />
            <DescriptionInput register={register} />
            <AdressInput register={register} />
            <NumberInput register={register} />
            <CityInput register={register} />
            <StateInput register={register} />
            <CountryInput register={register} />
            <button type="submit" className={ inputSubmit }>Send</button>
            <nav>
              <ButtonNavigate          
                navigate="/users"
                name="Users list"
              />
            </nav>
          </form>
        </main>
      </div>
    </div>
  );
}

export default FormPage;