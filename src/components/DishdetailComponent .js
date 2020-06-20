import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';


class CommentForm extends Component{

    constructor(props)
    {
        super(props);

        this.state={
            isformopen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isformopen:!this.state.isformopen
        });
    }
    render()
    {
        return(
            <React.Fragment>
            <div className="row">
                <button type="button" class="btn btn-outline-secondary" onClick={this.toggleModel}>
                    <span className="fa fa-pencil"> </span>  submit comment</button>

            </div>
            <Modal isOpen={this.state.isformopen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
          
                
            </ModalBody>
        </Modal>
        </React.Fragment>
        );
   }
}


    function RenderDish({dish}) {
        return(
            <div >
                <Card>
                    <CardImg width="100" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}){
        if (comments != null){
            let comms = comments.map((comm, i) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year:'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comm.date)))
                
                return (
                        <ul key={comm.id} className="list-unstyled">
                            <li className="comment">{comm.comment}</li>
                            <li className="author">-- {comm.author}, {date}</li>
                        </ul>
                    );
                })
            
            
            return (
                <div >
                    <h4>Comments</h4>
                    <div>{comms}</div>
                </div>
                
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }


    const DishDetail = (props) => {
        console.log(props);

        console.log('Dishdetail Component render invoked');

        if (props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <CommentForm/>
                    </div>

                </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

        
    }

export default DishDetail;