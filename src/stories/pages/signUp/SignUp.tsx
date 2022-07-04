import React from 'react';
import { Button } from '../../Button';
import { Input } from '../../Input/Intput';


interface SignUpProps {

}

export const SignUp = (props: SignUpProps) => {

  return(
    <>
      <p>회원 가입</p>
      <Input type="text" label="아이디" id="user-id" disabled={false} status="valid" />
      <Input type="password" label="비밀번호" id="user-pw" disabled={false} status="valid" />
      <Button label="회원가입"/>
    </>
  )
}