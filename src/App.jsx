import React from 'react';
import './App.css';

function App() {
	const elModal = React.useRef();

	return (
		<>
			<main
				onKeyDown={(evt) => {
					if (evt.code === 'Escape') {
						elModal.current.style.display = 'none';
					}
				}}>
				<div className='container'>
					<div
						className='modal'
						ref={elModal}
						onClick={() => (elModal.current.style.display = 'none')}>
						<div className='modal__item'>
							<h2 className='modal__heading
							'>Welocome to our site</h2>

							<button
								className='delete-btn'
								onClick={() =>
									(elModal.current.style.display = 'none')
								}>
								X
							</button>
						</div>
					</div>

					<button
						className='btn'
						onClick={() => {
							elModal.current.style.display = 'flex';
						}}>
						boos
					</button>
				</div>
			</main>
		</>
	);
}

export default App;
