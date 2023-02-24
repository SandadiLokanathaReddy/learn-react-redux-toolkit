import Navbar from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { Modal } from "./components/Modal";

function App() {
	const dispatch = useDispatch();
	const { cartItems, isLoading } = useSelector((state) => state.cart);
	const { isOpen } = useSelector((state) => state.modal);

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	useEffect(() => {
		dispatch(getCartItems("Hello Fanatics!"));
	}, []);

	if (isLoading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
