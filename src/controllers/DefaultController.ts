import { Request, Response, NextFunction } from 'express';

export const index = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.render('index');
    } catch (error) {
        return next(error);
    }
};
