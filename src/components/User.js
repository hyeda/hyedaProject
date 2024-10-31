import React from "react";
import CustomButton from "./Button";

function User({user, handleDelete}) {
    return (
      <div className='squareStyle'>
        <div>{user.name} - {user.age}살</div>
        <CustomButton color="red" onClick={handleDelete}>
          삭제
        </CustomButton>
      </div>
    );
  }

export default User;