import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ButtonEdit } from './button';
import ResetInputs from '../utils/ResetInputs';
import { NameInput, AgeInput, EmailInput, DescriptionInput, AdressInput,
  NumberInput, CityInput, StateInput, CountryInput } from '../components/inputs';
import UserImage from '../components/image/UserImage';
import { requestUpdate } from '../utils/api';
import UsersContext from '../provider/UsersContext';
import { form, h12, img2, buttonDetails } from '../styles/detailsPageStyle';

function EditForm() {
  const { setEdit } = useContext(UsersContext);
  const { register, handleSubmit, reset } = useForm();
  const { pathname } = useLocation();

  const onSubmit = async (data) => {
    const id = pathname.split('/').pop();
    const response = await requestUpdate(id, data);
    reset(ResetInputs);
    alert(response);
    setEdit(false);
    localStorage.setItem('user', JSON.stringify(data));
    window.location.reload();    
  };

  const editUser = () => {
    setEdit(false);
  };

  return (
    <div className="self-center">
      <main>
        <form
          className={ form }
          onSubmit={handleSubmit(onSubmit)}
        >
          <ButtonEdit onClick={ editUser } name="X" />
          <UserImage className={ img2 } />
          <h1 className={ h12 }>EDIT USER</h1>
          <NameInput register={register} />
          <AgeInput register={register} />
          <EmailInput register={register} />
          <DescriptionInput register={register} />
          <AdressInput register={register} />
          <NumberInput register={register} />
          <CityInput register={register} />
          <StateInput register={register} />
          <CountryInput register={register} />
          <button type="submit" className={ buttonDetails }>Send</button>
        </form>
      </main>
    </div>
  );
}

export default EditForm;