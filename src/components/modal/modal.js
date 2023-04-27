import './modal.css'
const Modal = ({ active, handleClose, children }) => {
  return (
    <div
      onClick={handleClose}
      className={active ? 'modal modal-active' : 'modal'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          active ? 'modal-content modal-content-active' : 'modal-content'
        }
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
