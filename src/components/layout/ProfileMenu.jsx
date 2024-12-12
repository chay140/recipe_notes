import { IoPersonCircleSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useUserStore } from '../../zustand/userStore';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = () => {
  const { profileImg } = useUserStore();
  const navigate = useNavigate();


  const moveToMyPage = () => {
    navigate("/mypage");
  }

    return (
      <StUserImgWrapper onClick={moveToMyPage}>
        {!profileImg ? (
          <IoPersonCircleSharp size="60px" />
        ) : (
          <StUserImg src={profileImg} />
        )}
      </StUserImgWrapper>
    );
}

export default ProfileMenu

const StUserImgWrapper = styled.div`
  cursor: pointer;
`;

const StUserImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-color: var(--color-primary);
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
`;