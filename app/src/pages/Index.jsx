import { useState, useEffect } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selected, setSelected] = useState(0);

  const getData = async () => {
    setLoading(true);
    fetch(`http://localhost:4000/api/listall?limit=9&offSet=${itemOffset}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentItems(data.users);
        setPageCount(Math.ceil(data.totalCount / 9));
        setItemsCount(parseInt(data.totalCount));
        setLoading(false);
      });
  };

  useEffect(() => {
    let isActive = false;
    if (!isActive) {
      getData();
    }

    return () => {
      isActive = true;
    };
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % itemsCount;
    setItemOffset(newOffset);
    setSelected(event.selected);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-3">Paginated users</h1>
      <div className="d-flex justify-content-center mt-5">
        <ReactPaginate
          key={"xd1"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={selected}
        />
      </div>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {currentItems.map((item, i) => (
            <Col key={i} lg="4">
              <Card className="mb-3 border-0 shadow">
                <Card.Header className="fw-bold text-center">
                  User #{item.id}
                </Card.Header>
                <Card.Body>{item.correo}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <div className="d-flex justify-content-center mt-5">
        <ReactPaginate
          key={"xd2"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={selected}
        />
      </div>
    </Container>
  );
};

export default Index;
