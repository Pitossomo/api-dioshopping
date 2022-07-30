import { useState } from "react"

const BuyForm = ({handleBuy}) => {
  const [creditCardNumber, setCreditCard] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  return (
    <form>
      <label>Credit Card</label><input value={creditCardNumber} onChange={e => setCreditCard(e.target.value)}/>
      <label>Exp Date</label><input type="date" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
      <button onClick={() => handleBuy({ creditCardNumber, expirationDate })}>Comprar</button>
    </form>
  )
}

export default BuyForm