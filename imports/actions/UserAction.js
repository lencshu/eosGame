import { ActionTypes } from '../const';

class PageAction {

  static SetPage({ visibleKYC }) {
    return {
      type: ActionTypes.setPage,
      visibleKYC 
    }
  }

}

export default PageAction;
