import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../../components/auth/AuthForm";
import { changeField, initializeForm } from "../../auth";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const {form} = useSelector(({auth}) => ({
    form: auth.register
  }));

  // 인풋 변경 이벤트 핸들러
  function onChange(e) {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  }

  // 폼 등럭 이벤트 핸들러
  function onSubmit(e) {
    e.preventDefault();
    // 구현 예정
  }

  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch])

  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}