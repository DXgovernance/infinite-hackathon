import '../styles/Organizers.css';

import { organizers } from '../common';
import Organizer from './Organizer';

export default function Organizers() {
  return (
    <section className='organizers'>
      <div className='title'>
        Organizers
      </div>
      <div className='subtitle'>
        As an open brand, the organization of infinite events are also, well, infinite
      </div>
      <div className='gridContainer'>

        {organizers.map(o => <Organizer key={o.name} logo={o.logo} name={o.name} rol={o.rol} description={o.description} />)}
        <hr className='divider' class="solid" />
      </div>
    </section>
  )
}