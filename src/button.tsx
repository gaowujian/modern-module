import './index.css';

function Button() {
  return (
    <div
      className="rounded inline-flex py-[3px] px-[6px] bg-blue-300 hover:cursor-pointer"
      onClick={() => {
        // eslint-disable-next-line no-alert
        alert('你为什么要点击这个按钮');
      }}
    >
      我是一个按钮
    </div>
  );
}

export default Button;
