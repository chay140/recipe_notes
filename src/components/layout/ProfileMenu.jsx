import { IoPersonCircleSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useUserStore } from '../../zustand/userStore';

const ProfileMenu = () => {
    const { profileImg } = useUserStore();

    return (
      <>
        {!profileImg ? (
          <IoPersonCircleSharp size="70px" />
        ) : (
          <StUserImg src={profileImg} />
        )}
      </>
    );
}

export default ProfileMenu

const StUserImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-color: var(--color-primary);
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
`;