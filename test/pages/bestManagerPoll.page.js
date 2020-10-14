import Page from "./page"

class bestManagerPoll extends Page {
    get poll(){
        return $("#PDI_form9721073 > div")
    }
    
    get marceloBielsa () {
        return $('#pds-answer9721073 > div:nth-child(3) > div > label > span')
    }
    
    get voteButton() {
        return $("#pd-vote-button9721073")
    }

    get totalVotes (){
        return $("#PDI_container9721073 > div > div > div > div > div.pds-answer > div:nth-child(1) > label > span.pds-feedback-result > span.pds-feedback-per")
    }
    open() {
        super.open('2017/04/12/quien-fue-el-mejor-dt-de-la-seleccion-en-los-ultimos-25-anos');
      }
    
    viewPoll(){
        if(this.poll.isExisting()){
            this.poll.scrollIntoView()
            //this.poll.saveScreenshot(`./test/poll_${when}.png`);
        }
    }
    voteMaradona(){
        this.marceloBielsa.click()
        this.voteButton.click()
    }

    getTotalVotes(){
        this.viewPoll();
        return this.totalVotes.getText().trim()
    }
}

export default new bestManagerPoll();