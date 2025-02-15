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
                Happy Valentine's Day, Zelitot! 💌
              </h1>
              <div className="letter-content">
                <p>
                  Hi, Zelitot! Konti na lang, gagraduate ka na! 🎓 Keep pushing
                  forward, stay focused, and always aim for honors you’re almost
                  at the finish line.
                </p>
                <p>
                  As you get closer to this big milestone, choose a course or
                  program that truly excites and inspires you. With your
                  dedication and hard work, success will surely follow.
                </p>
                <p>
                  Advance congratulations sa graduation mo! Super proud of
                  everything you’ve achieved so far, and there’s no doubt you’ll
                  accomplish even more.
                </p>
                <p className="fw-bold">So proud of you MF!</p>
                <button className="btn btn-success" onClick={hanldeContinue}>
                  Continue
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
