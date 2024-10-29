import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import LrtLogo from '@/components/atoms/LrtLogo';
import DatePicker from '@/components/atoms/DatePicker';
import Navbar from '@/components/molecules/Navbar';
import Copyright from '@/components/molecules/Copyright';
import { increment } from '@/store/slices/stepperSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Nomor handphone wajib diisi'),
    name: Yup.string().required('Nama wajib diisi'),
    birthDate: Yup.string().required('Tanggal lahir wajib diisi'),
    birthPlace: Yup.string().required('Tempat lahir wajib diisi'),
    email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
  });
  const { touched, errors, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      phoneNumber: '',
      name: '',
      birthDate: '',
      birthPlace: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(increment());
    },
  });

  return (
    <>
      <Navbar title="LRT  X JakOne Pay" />
      <div className="px-3">
        <div className="border-t-2 pt-[26px] pb-[31px]">
          <div className="flex flex-col gap-[26px]">
            <div className="flex justify-center">
              <LrtLogo />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[51px]">
              <div className="flex flex-col gap-[26px]">
                <Input
                  placeholder="Nomor telepon/handphone"
                  error={touched.phoneNumber && errors.phoneNumber}
                  {...getFieldProps('phoneNumber')}
                />
                <Input
                  placeholder="Nama"
                  error={touched.name && errors.name}
                  {...getFieldProps('name')}
                />
                <DatePicker
                  placeholder="Tanggal Lahir"
                  error={touched.birthDate && errors.birthDate}
                  {...getFieldProps('birthDate')}
                />
                <Input
                  placeholder="Tempat Lahir"
                  error={touched.birthPlace && errors.birthPlace}
                  {...getFieldProps('birthPlace')}
                />
                <Input
                  placeholder="Email"
                  error={touched.email && errors.email}
                  {...getFieldProps('email')}
                />
              </div>
              <div className="flex flex-col gap-[26px]">
                <Button type="submit" size="medium">
                  Daftar
                </Button>
                <Copyright />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
