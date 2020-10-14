import bestManagerPoll  from '../pages/bestManagerPoll.page'

describe('Vote for the best Argentinian Manager', ()=>{
    it('should navigate to the poll', ()=>{
        bestManagerPoll.open();
        bestManagerPoll.viewPoll();
    });
    it('should vote for Bielsa', ()=>{
         bestManagerPoll.voteMaradona()
         console.log(bestManagerPoll.getTotalVotes())
    });
})