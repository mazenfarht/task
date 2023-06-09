import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';

const Userquiz = () => {
  return (
    <>
      <div>
        <section className="page_user">
          <div>
            <section class="cards" id="services">
              <h2 class="title">#Quiz_name#</h2>
                <div class="content">
                <audio
                  src="./../../../uploads/default.mp3"
                  controls
                />
                <div class="card_Q">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>question </Accordion.Header>
                      <Accordion.Body>
                        <Tab.Container id="list-group-tabs-example">
                          <ListGroup>
                            <ListGroup.Item action href="#answer_1">
                              answer 1
                            </ListGroup.Item>

                            <ListGroup.Item action href="#answer_2">
                              answer 2
                            </ListGroup.Item>

                            <ListGroup.Item action href="#answer_3">
                              answer 3
                            </ListGroup.Item>
                          </ListGroup>
                        </Tab.Container>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <Button variant="primary">
                  <h4>submit</h4>
                </Button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
export default Userquiz;
