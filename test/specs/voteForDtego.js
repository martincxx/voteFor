import worstManagerPoll  from '../pages/worstManagerPoll.page'

describe('Vote for the worst Argentinian Manager', ()=>{
    it('should navigate to the poll',() =>{
        worstManagerPoll.open();
        worstManagerPoll.viewPoll();
    });
    it('should vote for Maradona', () =>{
            worstManagerPoll.voteMaradona();
            console.log(worstManagerPoll.getTotalVotes())
    });
})