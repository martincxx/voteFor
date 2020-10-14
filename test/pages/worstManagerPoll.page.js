import Page from "./page"

class worstManagerPoll extends Page {
    get poll(){
        return $("#PDI_form9721076 > div")
    }
    
    get diegoMaradona () {
        return $('#pds-answer9721076 > div:nth-child(5) > div > label')
    }
    
    get voteButton() {
        return $("#pd-vote-button9721076")
    }

    get totalVotes (){
        return $("#PDI_container9721076 > div > div > div > div > div.pds-answer > div:nth-child(1) > label > span.pds-feedback-result > span.pds-feedback-per")
    }
    open() {
        super.open('2017/04/13/quien-fue-el-peor-dt-de-la-seleccion-en-los-ultimos-25-anos');
      }
    
    viewPoll(){
        if(this.poll.isExisting()){
            this.poll.scrollIntoView()
            //this.poll.saveScreenshot(`./test/poll_${when}.png`);
        }
    }
    
    voteMaradona(){
        this.diegoMaradona.click()
        this.voteButton.click()
    }

    getTotalVotes(){
        this.viewPoll()
        return this.totalVotes.getText().trim()

    }
}

export default new worstManagerPoll();