import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Card, CardColumns } from "react-bootstrap";
import age from './images/age.png';
import diagram from './images/diagram.png';
// import linear from './images/linear.png';
import backwards from './images/backwards.png';
import drawing from './images/drawing.png';
import money from './images/money.png';
import concrete from './images/concrete Materials.png';
import speed from './images/speed.png';
import model from './images/model.png';
import riddle1 from './images/riddle1.png';
import riddle2 from './images/riddle2.png';
import riddle3 from './images/riddle3.png';
import assuming from './images/assuming.png';


const Concepts = () => {
  return (
    <CardColumns  style={{paddingLeft:'6%',paddingRight:'6%'}}>

<div onClick={event =>  window.location.href='/speed'}>
      <Card >
        <Card.Img variant="top" src={speed} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>SPEED </Card.Title>
          <Card.Title>(BÀI TOÁN VẬN TỐC) </Card.Title>
          {/* <Card.Text>
          When students are required to draw a diagram of a large area the diagram will often need to be scaled down. Drawing a picture can help students simplify a problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>      
      
      <div onClick={event =>  window.location.href='/model'}>
      <Card >
        <Card.Img variant="top" src={model} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>MAKE MODEL </Card.Title>
          <Card.Title>(PHƯƠNG PHÁP VẼ MODEL) </Card.Title>
          {/* <Card.Text>
          The examples on algebra word problems – money will help us to learn how to write and solve equations involving money, explanation how to solve the algebra word money.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>      

      <div onClick={event =>  window.location.href='/age'}>
      <Card >
        <Card.Img variant="top" src={age} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>AGE WORD PROBLEM </Card.Title>
          <Card.Title>(BÀI TOÁN VỀ TUỔI) </Card.Title>
          {/* <Card.Text>
          We encounter word problems that require us to find the relationship between the ages of different people. Age word problems typically involve comparing two people’s ages.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>

      <div onClick={event =>  window.location.href='/diagram'}>
      <Card >
        <Card.Img variant="top" src={diagram} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>CREATING A TREE DIAGRAM </Card.Title>
          <Card.Title>(PHƯƠNG PHÁP BIỂU ĐỒ CÂY) </Card.Title>
          {/* <Card.Text>
          It is important that students follow a logical and systematic approach to their problem solving. Students will enable students to tackle problems in a structured and meaningful way
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>      
      
      <div onClick={event =>  window.location.href='/backwards'}>
      <Card >
        <Card.Img variant="top" src={backwards} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title> WORKING BACKWARDS </Card.Title>
          <Card.Title> (SUY LUẬN NGƯỢC) </Card.Title>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>      
      
      <div onClick={event =>  window.location.href='/drawing'}>
      <Card >
        <Card.Img variant="top" src={drawing} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>DRAWING </Card.Title>
          <Card.Title>(PHƯƠNG PHÁP VẼ) </Card.Title>
          {/* <Card.Text>
          When students are required to draw a diagram of a large area the diagram will often need to be scaled down. Drawing a picture can help students simplify a problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>      
      
      <div onClick={event =>  window.location.href='/money'}>
      <Card >
        <Card.Img variant="top" src={money} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>MONEY </Card.Title>
          <Card.Title>(BÀI TOÁN VỀ TIỀN) </Card.Title>
          {/* <Card.Text>
          The examples on algebra word problems – money will help us to learn how to write and solve equations involving money, explanation how to solve the algebra word money.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>      
      
      <div onClick={event =>  window.location.href='/concrete'}>
      <Card >
        <Card.Img variant="top" src={concrete} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>CONCRETE MATERIALS </Card.Title>
          <Card.Title>(PHƯƠNG PHÁP LIÊN KẾT) </Card.Title>
          {/* <Card.Text>
This strategy is most often used with problems where it is necessary to work out all possible combinations of the different factors in the problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>

      <div onClick={event =>  window.location.href='/assuming'}>
      <Card >
        <Card.Img variant="top" src={assuming} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>ASSUMING </Card.Title>
          <Card.Title>(PHƯƠNG PHÁP GIẢ SỬ) </Card.Title>
          {/* <Card.Text>
This strategy is most often used with problems where it is necessary to work out all possible combinations of the different factors in the problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>

      <div onClick={event =>  window.location.href='/riddle-1'}>
      <Card >
        <Card.Img variant="top" src={riddle1} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>RIDDLES PART 1</Card.Title>
          <Card.Title>(TỔNG HỢP CÂU HỎI PHẦN 1) </Card.Title>
          {/* <Card.Text>
This strategy is most often used with problems where it is necessary to work out all possible combinations of the different factors in the problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>

      <div onClick={event =>  window.location.href='/riddle-2'}>
      <Card >
        <Card.Img variant="top" src={riddle2} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>RIDDLES PART 2 </Card.Title>
          <Card.Title>(TỔNG HỢP CÂU HỎI PHẦN 2) </Card.Title>
          {/* <Card.Text>
This strategy is most often used with problems where it is necessary to work out all possible combinations of the different factors in the problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>

      <div onClick={event =>  window.location.href='/riddle-3'}>
      <Card >
        <Card.Img variant="top" src={riddle3} />
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>RIDDLES PART 3 </Card.Title>
          <Card.Title>(TỔNG HỢP CÂU HỎI PHẦN 3)</Card.Title>
          {/* <Card.Text>
This strategy is most often used with problems where it is necessary to work out all possible combinations of the different factors in the problem.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 2021</small>
        </Card.Footer>
      </Card>
      </div>


    </CardColumns>
    
);
};

export default Concepts;


{/* <div onClick={event =>  window.location.href='/linear'}>
<Card >
  <Card.Img variant="top" src={linear} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title> LINEAR EQUATIONS </Card.Title>
    <Card.Title> (BIỂU THỨC) </Card.Title>
    </Card.Body>
  <Card.Footer>
  <small className="text-muted">Last updated 2021</small>
  </Card.Footer>
</Card>
</div>   */}