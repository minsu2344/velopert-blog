import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../../components/auth/AuthForm";
import { changeField, initializeForm, login } from "../../auth";
import { check } from "../../user";

export default function LoginForm() {
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {form, auth, authError, user} = useSelector(({auth, user}) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
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
    
    const {username, password} = form;
    dispatch(login({username, password}))
  }

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화 함
  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch])

  useEffect(() => {
    if(authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패')
      return;
    }
    if(auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch])

  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  )
}