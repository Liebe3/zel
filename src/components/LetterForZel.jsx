import React from "react";
import { useNavigate } from "react-router-dom";

const LetterForZel = () => {
  const navigate = useNavigate();

  const hanldeContinue = (e) => {
    e.preventDefault();
    // Navigate to the Letter component and pass the name via state
    navigate("/flowers");
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">
      "
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="text-center mb-4">
                Happy 23rd Birthday Berooo!!🎂
              </h1>
              <div className="letter-content">
                <p>
                  On your special day, I want to wish you the happiest of
                  birthdays! 🎉 May this year bring you endless joy, success,
                  and wonderful adventures.
                </p>
                <p>
                  I know we dont know each other that well yet, but youre
                  genuinely such a kind person. Dont ever give up on chasing
                  your dreams youre meant for amazing things✨ heheehehhe.
                  Dont stress yourself too much sa work mo or anything, okay? You
                  deserve peace and happiness.
                </p>
                <p>
                Happy birthday piiii 🥺💖
                Sorry again for the last minute cancel ng plan 🙈 Ill make it up to you later ^^!
                </p>
                <p className="fw-bold">Have the most amazing birthday Berooooo!🎈</p>
                <button
                  className="btn btn-success mt-4"
                  onClick={hanldeContinue}
                >
                  Continue to your surprise
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterForZel;
