import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loginAction, LoginAction } from '../../../state/actions/auth-action';
import LoninComponent from './login-component';
import { RootState } from '../../../state/reducers/root-reducer';

const onError = () => {
}

const mapStateToProps = (state: RootState) => {
	return {
		status: state.authReducer.status
	}
}

const mapDispatchToProps = (dispatch: Dispatch<LoginAction>) => {
	return {
		onError: onError,
		submitLogin: (body: any) => dispatch(loginAction(body))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoninComponent);