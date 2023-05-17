import React, { useState } from "react";
import { Button } from "@mui/material";
import { atom, atomFamily, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";


const pageNoatomFamily = atomFamily({
  key: 'app/page1NoAtom',
  default: (pageNo) => pageNo
})

function usePageCount(pageNo) {
  const [count, setCount] = useRecoilState(pageNoatomFamily(pageNo));

  const increaseOne = () => setCount(count + 1);
  const decreaseOne = () => setCount(count - 1);
  const increaseTen = () => setCount(count + 10);
  const decreaseTen = () => setCount(count - 10);
  const clear = () => setCount(0);

  return {
    count,
    increaseOne,
    decreaseOne,
    increaseTen,
    decreaseTen,
    clear,
  }
}

function Page1() {
  const pageCountState = usePageCount(1);
  
  return (
    <>
      <div className="text-2xl">페이지1</div>
      <ul>
        <li>페이지1의 숫자 : {pageCountState.count}</li>
        <li><Button variant="contained" onClick={pageCountState.increaseOne}>페이지1 숫자 1증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseOne}>페이지1 숫자 1감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.increaseTen}>페이지1 숫자 10증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseTen}>페이지1 숫자 10감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.clear}>초기화</Button></li>
      </ul>
    </>
  )
}

function Page2() {
  const pageCountState = usePageCount(2);

  return (
    <>
      <div className="text-2xl">페이지2</div>
      <ul>
        <li>페이지2의 숫자 : {pageCountState.count}</li>
        <li><Button variant="contained" onClick={pageCountState.increaseOne}>페이지1 숫자 1증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseOne}>페이지1 숫자 1감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.increaseTen}>페이지1 숫자 10증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseTen}>페이지1 숫자 10감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.clear}>초기화</Button></li>
      </ul>
    </>
  )
}

function Page3() {
  const pageCountState = usePageCount(3);

  return (
    <>
      <div className="text-2xl">페이지3</div>
      <ul>
        <li>페이지3의 숫자 {pageCountState.count}</li>
        <li><Button variant="contained" onClick={pageCountState.increaseOne}>페이지1 숫자 1증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseOne}>페이지1 숫자 1감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.increaseTen}>페이지1 숫자 10증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseTen}>페이지1 숫자 10감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.clear}>초기화</Button></li>
      </ul>
    </>
  )
}

function Page4() {
  const pageCountState = usePageCount(4);

  return (
    <>
      <div className="text-2xl">페이지4</div>
      <ul>
        <li>페이지4의 숫자 {pageCountState.count}</li>
        <li><Button variant="contained" onClick={pageCountState.increaseOne}>페이지1 숫자 1증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseOne}>페이지1 숫자 1감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.increaseTen}>페이지1 숫자 10증가</Button></li>
        <li><Button variant="contained" onClick={pageCountState.decreaseTen}>페이지1 숫자 10감소</Button></li>
        <li><Button variant="contained" onClick={pageCountState.clear}>초기화</Button></li>
      </ul>
    </>
  )
}

export default function App() {
  const [pageNo, setPageNo] = useState('page1');
  const switchPage = () => setPageNo(pageNo + 1 <= 4 ? pageNo + 1 : 1);
  return (
    <>
      <Button variant="contained" onClick={switchPage}>스위치</Button>
      {pageNo == 1 && <Page1 />}
      {pageNo == 2 && <Page2 />}
      {pageNo == 3 && <Page3 />}
      {pageNo == 4 && <Page4 />}
    </>
  );
}
