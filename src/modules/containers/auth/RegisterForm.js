import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../auth";
import { check } from "../../user";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [error, setError] = useState(null);
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
    // 한 칸이라도 비었을 때
    if([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.')
      return;
    }
    if(password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({form: 'register', key: 'password', value: ''}))
      dispatch(changeField({form: 'register', key: 'passwordConfirm', value: ''}))
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
      // 계정이 이미 존재
      if(authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      // 기타 이유
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
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user))
      } catch(e) {
        console.log('localStorage is not working')
      }
    }
  }, [user, navigate])

  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  )
}