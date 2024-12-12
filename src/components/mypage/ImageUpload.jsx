import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useUserStore } from '../../zustand/userStore';
import { IoPersonCircleSharp } from 'react-icons/io5';

const ImageUpload = () => {
  const fileInputRef = useRef(null); // input 요소를 참조하기 위한 ref
  const { profileImg } = useUserStore();
  const [previewSrc, setPreviewSrc] = useState(profileImg); // 기본 이미지로 설정
  const [isDeleteVisible, setIsDeleteVisible] = useState(profileImg || false);

  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  const maxSize = 20 * 1024 * 1024; // 20MB

  const readURL = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > maxSize) {
        alert('20MB 이하의 파일만 업로드 가능합니다.');
        resetInput();
        return;
      }

      if (!allowedExtensions.exec(file.name)) {
        alert('jpg, jpeg, png, gif 확장자만 업로드 가능합니다.');
        resetInput();
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewSrc(e.target.result);
        setIsDeleteVisible(true); // 상태 업데이트
        console.log('이미지 업로드 완료'); // 로그 추가
      };
      reader.readAsDataURL(file);
    } else {
      resetInput();
    }
  };

  const resetInput = () => {
    setPreviewSrc(null);
    setIsDeleteVisible(false);
    fileInputRef.current.value = null; // 파일 input 초기화
  };

  const handleDelete = () => {
    resetInput();
  };

  return (
    <>
      <StImgBox>
        {previewSrc ? (
          <img id="preview" src={previewSrc} alt="미리보기" />
        ) : (
          <IoPersonCircleSharp size="140px" />
        )}
      </StImgBox>

      <StFlex>
        <StButton type="button" onClick={() => fileInputRef.current.click()}>
          이미지 첨부
        </StButton>

        <input
          type="file"
          accept="image/*"
          name="profileImg"
          id="profileImg"
          ref={fileInputRef} // ref를 통해 input 요소 참조
          onChange={readURL}
          style={{ display: 'none' }}
        />

        {isDeleteVisible && (
          <StButton type="button" onClick={handleDelete}>
            이미지 삭제
          </StButton>
        )}
      </StFlex>
    </>
  );
};

const StImgBox = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  border: 1px solid var(--color-black);
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StButton = styled.button`
  width: auto;
  background-color: var(--color-third);
  color: var(--color-gray7);

  margin-top: 10px;
  padding: 15px 10px 10px;
  border-radius: var(--default-radius);
`;

const StFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default ImageUpload;
