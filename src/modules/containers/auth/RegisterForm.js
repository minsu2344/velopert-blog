import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../auth";
import { check } from "../../user";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const {form, auth, authError, user} = useSelector(({auth, user}) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));
  const navigate = useNavigate();

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
    const {username, password, passwordConfirm} = form;
    if(password !== passwordConfirm) {
      // TODO: 오류처리
      return;
    }
    dispatch(register({username, password}))
  }

  // 컴포넌트가 처음 렌더링 될 때 from을 초기화
  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch])

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if(authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if(auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check())
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}