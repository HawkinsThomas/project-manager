import { connect } from 'react-redux';
import Dashboard from './component';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './redux';


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
