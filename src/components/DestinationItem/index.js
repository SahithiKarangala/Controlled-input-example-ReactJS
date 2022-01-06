import './index.css'

const DestinationProfile = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations

  return (
    <li className="destination">
      <div>
        <img src={imgUrl} className="image" alt={name} />
        <p className="destination-name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationProfile
