import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../../components/auth/AuthForm";
import { changeField, initializeForm } from "../../auth";

export default function LoginForm() {
  const dispatch = useDispatch();
  const {form} = useSelector(({auth}) => ({
    form: auth.login
  }));
  // 인풋 변경 이벤트 핸들러
  function onChange(e) {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    )
  };

  // 폼 등록 이벤트 핸들러
  function onSubmit(e) {
    e.preventDefault();
    // 구현 예정
  }

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화 함
  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch])

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}