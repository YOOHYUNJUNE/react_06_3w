import React from "react";


function Header({header}) {
    // 블로그 이름, 설명을 객체로 받음 {title: '', description: ''}
    return (
   
        <header>




            <div className="container">
            <header className="d-flex justify-content-center py-3">

                 {/* 줄바꿈 */}
            <div className="d-flex flex-column align-items-center">


            <h1>Title</h1>

            <p>1111</p>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">A</a></li>
                <li className="nav-item"><a href="#" className="nav-link">B</a></li>
                <li className="nav-item"><a href="#" className="nav-link">C</a></li>
                <li className="nav-item"><a href="#" className="nav-link">D</a></li>
                <li className="nav-item"><a href="#" className="nav-link">E</a></li>
            </ul>
            </div>
            </header>
            </div>


            
        </header>


    )
}

export default Header