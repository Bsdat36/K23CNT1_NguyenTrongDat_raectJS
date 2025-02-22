import NtdClassComp from "./components/NtdClassComp";
import NtdFuncComp from "./components/NtdFuncComp";
import NtdjsxExpression from "./components/NtdjsxExpression";

function NtdApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyễn Trọng Đạt</h1>
      <NtdjsxExpression />

      <hr/>
      {/* Sử dụng function components */}
      <NtdFuncComp />

      {/*Sử dụng class components */}
      <NtdClassComp></NtdClassComp>
    </div>
  );
}

export default NtdApp;
