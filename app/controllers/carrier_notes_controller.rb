class CarrierNotesController < ApplicationController
    def index
        notes = CarrierNote.all
        render json: notes
    end

    def create
        @current_user.create()
    end

    private 
    def notes_params
        params.permit()
    end
end
