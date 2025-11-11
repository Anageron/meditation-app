
export interface IMeditation {
        id: number,
				created_at: string,
				updated_at: string,
				title: string,
				description: string,
				duration_min: number
}

export interface ApiResponse {
      data: { meditations: IMeditation[] };
      status: string;
    }
