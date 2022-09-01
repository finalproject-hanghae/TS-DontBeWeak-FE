import React from "react";

const useHandleClick = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const openedModalRef = React.useRef<HTMLInputElement>(null);

  const showModal = () => {
    setIsOpened(true);
  };

  React.useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (
        openedModalRef.current &&
        !openedModalRef.current?.contains(e.target)
      ) {
        setIsOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openedModalRef]);

  return [isOpened, setIsOpened, showModal, openedModalRef];
};

export default useHandleClick;

//  const [friends,showModal,friendListModalRef] = useHandleClick();
// 스테이트 오픈함수 모달범위Ref
