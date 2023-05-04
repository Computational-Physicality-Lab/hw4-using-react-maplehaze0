import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import charList from '../characterList';
import shirtList from '../shirtList';
import './CharacterPage.css'
// import CartPage from '../CartPage';


const CharacterPage = ({ handleAddToCart, handleQuantityChange}) => {
  const { name } = useParams();
  console.log(name);
  const shirt = shirtList.filter((shirt) => shirt.name === name)[0];
  console.log(shirt);
  const { description, price, colors } = shirt;

  const [image, setImage] = useState(shirt.colors.white.front); // 初始状态为第一个图像
  // const [cart, setCart] = useState([]); // 初始状态为一个空数组

  const [selectedColor, setSelectedColor] = useState('white'); // 初始颜色为白色
  const [selectedSide, setSelectedSide] = useState('front'); // 初始面为正面
  const [dropdownOpen, setDropdownOpen] = useState(false); // 下拉菜单的开关状态
  const [selectedSize, setSelectedSize] = useState('S');
  // const [selectedQuantity, setSelectedQuantity] = useState(1);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSizeChange = (size) => setSelectedSize(size);
  const handleColorChange = (color) => setSelectedColor(color);
  const handleSideChange = (side) => setSelectedSide(side);
  




  return (
    <Container className="d-flex justify-content-center align-items-center">
    <Row>

      <Col xs="12" md="6" className="text-left">
        <h1>{name}</h1>
        <img src={colors[selectedColor][selectedSide]} alt="Product image" />
      </Col>

      <Col xs="12" md="6" className="text-right">
        <h1 className='price'>{price}</h1>
        <p className='description'>{description}</p>

        <div className="mb-3">
          <Button color="primary" onClick={() => handleSideChange('front')} active={selectedSide === 'front'}>
            Front
          </Button>{' '}
          <Button color="primary" onClick={() => handleSideChange('back')} active={selectedSide === 'back'}>
            Back
          </Button>
        </div>

        <div className="mb-3">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>Color: {selectedColor}</DropdownToggle>
            {Object.keys(colors).map((color) => (
                  <DropdownItem key={color} onClick={() => handleColorChange(color)}>{color}</DropdownItem>
                ))}
          </Dropdown>
        </div>

        <div className="mb-3">
          <label>Quantity:</label>
          <input onChange={(e) => handleQuantityChange(e.target.value)} type="number" min="1" defaultValue="1" />
        </div>

        <div className="mb-3">
          <label>Size:</label>
          <select onChange={(e) => handleSizeChange(e.target.value)}>
            <option>Women's XS</option>
            <option>Women's M</option>
            <option>Women's S</option>
            <option>Women's L</option>
            <option>Women's XL</option>
            <option>Women's 2XL</option>
            <option>Men's XS</option>
            <option>Men's S</option>
            <option>Men's M</option>
            <option>Men's L</option>
            <option>Men's XL</option>
            <option>Men's 2XL</option>
          </select>
        </div>


        <div>
          <Button onClick={handleAddToCart} color="primary" size="lg">Add to Cart</Button>
        </div>

      </Col>

    </Row>
  </Container>
  // </div>
  );
};

export default CharacterPage;

export function cartCount( {cart} ){
  return(
    length(cart)
  )
}

