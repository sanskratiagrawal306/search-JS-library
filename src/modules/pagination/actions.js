const triggerNextPage = (context,next) =>{
    context.viewState.lastAction = "pagination";
    context.setPageStart(next);
    context.getResults();
    context.options.onEvent(context,context.events.pageNext, {
        value:next
    });
};
function renderNewResults(action) {
    const pageInfo = this.getPaginationInfo();
    const {
        pagination,
        onEvent
    } = this.options;
    const {
        start,
        productsLn,
        numberOfProducts,
        rows,
        isNext,
        isPrev
    } = pageInfo;
    if(pagination.type === "CLICK_N_SCROLL" || pagination.type === "INFINITE_SCROLL") {
        const next = start+rows;
        if(isNext){
            this.viewState.isInfiniteStarted = true;
            triggerNextPage(this,next);
        }
    } else {
        if(action === this.actions.next){
            const next = start+rows;
            if(isNext){
                triggerNextPage(this,next);
            }
        }
        if(action === this.actions.prev){
            const prev = start-rows;
            if(isPrev){
                this.viewState.lastAction = "pagination";
                triggerNextPage(this,prev);
                onEvent(this,this.events.pagePrev, {
                    value:prev
                });
            }
        }

    }
};
function paginationAction(e){
    const {
        pageAction,
        pageNo
    } = e.target.dataset;
    this.checkFacets();
    this.viewState.lastDidYouMean = "";
    if(pageAction === 'paginate'){
        this.viewState.lastAction = "pagination";
        this.setPageStart(pageNo);
        this.getResults();
    } else{
        this.renderNewResults(pageAction);
    }
}
export {
    renderNewResults,
    paginationAction
};
