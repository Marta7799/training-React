// { <Profile name="Mango" email="mango@mail.com" />;
// }
import PropTypes from "prop-types";

const isProfileAvailable = true;
// const isProfileAvailable = false;

// const Profile = ({ name, email }) => {
//   return (
//     <>
//       {isProfileAvailable && (
//         <div>
//           <p>Name:{name}</p>
//           <p>E-mail:{email}</p>
//         </div>
//       )}
//     </>
//   );
// };
const Profile = ({ name, email }) => {
  return (
    <>
      {isProfileAvailable ? (
        <div>
          <p>Name:{name}</p>
          <p>E-mail:{email}</p>
        </div>
      ) : (
        <div>Profile is not available</div>
      )}
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Profile;
