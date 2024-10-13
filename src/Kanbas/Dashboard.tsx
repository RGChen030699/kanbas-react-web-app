import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 g-4">
        {/* Course 1 - Web Development */}
        <div className="col">
          <Link to="/Kanbas/Courses/WebDev/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course3.jpg" className="card-img-top" alt="Web Development" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS1234 Web Development</h5>
                <p className="card-text">Frontend and Backend Web Technologies</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Course 2 - Java */}
        <div className="col">
          <Link to="/Kanbas/Courses/Java/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course1.jpg" className="card-img-top" alt="Java Programming" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS103 Java Programming</h5>
                <p className="card-text">Object-Oriented Programming with Java</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Course 3 - Software Engineering */}
        <div className="col">
          <Link to="/Kanbas/Courses/SE/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course2.jpg" className="card-img-top" alt="Software Engineering" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS102 Software Engineering</h5>
                <p className="card-text">Principles of Software Development</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Course 4 - Object-Oriented Design */}
        <div className="col">
          <Link to="/Kanbas/Courses/OOD/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course4.jpg" className="card-img-top" alt="Object-Oriented Design" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS104 Object-Oriented Design</h5>
                <p className="card-text">Advanced Object-Oriented Design Patterns</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Course 5 - Algorithms */}
        <div className="col">
          <Link to="/Kanbas/Courses/Algorithms/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course5.jpg" className="card-img-top" alt="Algorithms" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS105 Algorithms</h5>
                <p className="card-text">Data Structures and Algorithmic Thinking</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Course 6 - Mobile Development */}
        <div className="col">
          <Link to="/Kanbas/Courses/MobileDev/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course6.jpg" className="card-img-top" alt="Mobile Development" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS107 Mobile Development</h5>
                <p className="card-text">Building Mobile Apps for iOS and Android</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Course 7 - Game Design */}
        <div className="col">
          <Link to="/Kanbas/Courses/GameDesign/Home" className="text-decoration-none">
            <div className="card h-100">
              <img src="/images/Course7.jpg" className="card-img-top" alt="Game Design" style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CS106 Game Design</h5>
                <p className="card-text">Fundamentals of Game Design and Development</p>
                <button className="btn btn-primary mt-auto">Go</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
