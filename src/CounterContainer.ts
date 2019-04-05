import { connect } from 'react-redux';
import Counter from './Counter';

const mapStateToProps = (state:any) => {
    return {cpt:state.count}
}

function mapDispatchToProps(dispatch: any) {
    return {
        onClickIncrement:()=>{            
            const action = {type:'INCREMENT'};
            dispatch(action);
        },
        onClickDecrement:()=>{            
            const action = {type:'DECREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);