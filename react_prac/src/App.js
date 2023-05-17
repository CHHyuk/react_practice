import React, { useState } from "react";
import { Button } from "@mui/material";
import { atom, useRecoilValue ,useRecoilState, useSetRecoilState} from "recoil";


const page1NoAtom = atom ({
  key: 'app/page1NoAtom',
  default: 0
})

const page2NoAtom = atom ({
  key: 'app/page2NoAtom',
  default: 0
})

function Page1() {
  const [no, setNo] = useRecoilState(page1NoAtom);
  const setPage2No = useSetRecoilState(page2NoAtom);

  const onClick =() => setPage2No(0);

  return (
    <>
      <div className="text-2xl">페이지1</div>

      <div>
        <Button variant="contained" onClick={onClick}>페이지 2의 값 초기화</Button>
      </div>
      <ul>
        <li>페이지1의 숫자 : {no}</li>
        <li><Button variant="contained" onClick={() => setNo(no + 5)}>페이지1 숫자 5증가</Button></li>
        <li><Button variant="contained" onClick={() => setNo(no - 5)}>페이지1 숫자 5감소</Button></li>
      </ul>
    </>
  )
}

function Page2() {
  const page1No = useRecoilValue(page1NoAtom)
  const [no, setNo] = useRecoilState(page2NoAtom);

  return (
    <>
      <div className="text-2xl">페이지2</div>

      <div>페이지1의 숫자 : {page1No}</div>
      <ul>
        <li>페이지2의 숫자 : {no}</li>
        <li><Button variant="contained" onClick={() => setNo(no + 1)}>페이지2 숫자 1증가</Button></li>
        <li><Button variant="contained" onClick={() => setNo(0)}>페이지2 숫자 초기화</Button></li>
      </ul>
    </>
  )
}

export default function App() {
  const [pageName, setPageName] = useState('page1');
  const switchPage = () => setPageName(pageName == 'page1' ? 'page2' : 'page1')

  return (
    <>
      <Button variant="contained" onClick={switchPage}>스위치</Button>
      {pageName == 'page1' && <Page1 />}
      {pageName == 'page2' && <Page2 />}
    </>
  );
}
