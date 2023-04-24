function Alert() {
  return (
    <div className="alert alert-info shadow-lg">
      <div className="text-white">
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>알림창 꾸미기 + 아이콘 설정</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Alert />
      <hr className="my-4" />
      <Alert />
    </>
  );
}

export default App;
