import {
    onClickPageSize
} from './actions';
import pageSizeUi from './pageSizeView';
const renderPageSize = function() {
    const {
        pagesize
    } = this.options;
    const qParams  = this.getQueryParams();
    if(qParams) {
        pagesize.pageSize = this.state.pageSize;
    }
    this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(pagesize);
}
const setPageSize = (prototype) => {
    prototype = Object.assign(prototype,{
        pageSizeUi,
        onClickPageSize,
        renderPageSize
    })
}
export {
    setPageSize as default,
    renderPageSize,
    pageSizeUi,
    onClickPageSize
};